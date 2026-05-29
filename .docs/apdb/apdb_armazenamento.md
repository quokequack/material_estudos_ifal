# Armazenamento Lógico e Físico no Oracle

Quando trabalhamos com um banco de dados Oracle, precisamos entender que os dados vivem em dois mundos ao mesmo tempo: o mundo **lógico**, que é como o banco enxerga e organiza os dados internamente, e o mundo **físico**, que é como esses dados de fato ocupam espaço no disco. Essa separação existe para dar flexibilidade ao DBA (Administrador de Banco de Dados): você pode reorganizar os arquivos físicos sem necessariamente mudar a estrutura lógica do banco, e vice-versa.

---

## A Estrutura Lógica: do Bloco ao Tablespace

A estrutura lógica do Oracle é hierárquica. No nível mais baixo temos o **bloco de dados** (Oracle Data Block), e subindo chegamos até o **tablespace**. Pensa assim: é como uma cidade organizada em quarteirões, bairros e zonas — cada nível agrupa o anterior.

### Oracle Data Blocks (Blocos de Dados)

O bloco de dados é a menor unidade de armazenamento que o Oracle gerencia. Quando o banco precisa ler ou gravar algo no disco, ele sempre faz isso em múltiplos de blocos — nunca lê bytes soltos. O tamanho padrão de um bloco é definido no momento da criação do banco de dados pelo parâmetro `DB_BLOCK_SIZE`, e valores comuns são 4KB, 8KB ou 16KB.

Internamente, cada bloco tem uma estrutura bem definida:

- **Cabeçalho do bloco (Block Header):** contém metadados como o endereço do bloco, o tipo de segmento e informações sobre as transações ativas que estão tocando naquele bloco. O tamanho do cabeçalho varia, pois depende do parâmetro `INITRANS`, que define quantas entradas de transação concorrentes são reservadas por padrão.
- **Área de dados:** onde as linhas da tabela (ou entradas de índice) são de fato armazenadas.
- **Espaço livre:** existe uma "reserva" dentro de cada bloco controlada pelos parâmetros `PCTFREE` e `PCTUSED`, explicados a seguir.

#### PCTFREE e PCTUSED

Esses dois parâmetros controlam como o Oracle usa o espaço livre dentro de um bloco:

- **PCTFREE** define a porcentagem do bloco que deve ser **mantida livre** para acomodar futuras operações de `UPDATE` que aumentem o tamanho das linhas já existentes. Por exemplo, se `PCTFREE = 20`, o Oracle só insere novas linhas enquanto o bloco tiver mais de 20% de espaço livre. Quando o bloco chega aos 20% de espaço livre, ele para de aceitar novas inserções naquele bloco — mas ainda permite updates nas linhas já existentes.
- **PCTUSED** define o percentual mínimo de uso que um bloco deve ter para o Oracle considerar que ele voltou a aceitar novas inserções. Por exemplo, se `PCTUSED = 40`, quando o uso do bloco cair abaixo de 40% (por causa de deleções), o Oracle recoloca aquele bloco na lista de blocos disponíveis para inserção.

**Exemplo prático:** Imagine um bloco com `PCTFREE = 20` e `PCTUSED = 40`. O Oracle insere linhas até o bloco estar 80% cheio. A partir daí, não aceita mais inserções naquele bloco. Se muitas linhas forem deletadas e o bloco cair para 35% de uso, ele ainda não volta para a lista de inserção. Só quando cair abaixo de 40% é que o bloco é recolocado na lista.

---

### Extents (Extensões)

Um **extent** é um conjunto contíguo de blocos de dados no disco. Quando um objeto (como uma tabela) precisa de mais espaço, o Oracle não aloca bloco por bloco — ele aloca um extent inteiro de uma vez. Isso é mais eficiente porque reduz a fragmentação e o número de operações de alocação.

Quando você cria uma tabela e começa a inserir dados, o Oracle aloca o primeiro extent para ela. Quando esse extent enche, um segundo extent é alocado, e assim por diante. Os extents de um mesmo objeto não precisam ser contíguos no disco — eles só precisam ser contíguos internamente (ou seja, cada extent é um bloco contíguo de blocos).

---

### Segmentos

Um **segmento** é o conjunto de todos os extents que pertencem a um único objeto de banco de dados. Cada tabela, cada índice, cada sequência com área de cache — cada um desses objetos corresponde a um segmento.

Voltando ao exemplo do slide: as tabelas `TAB_VEICULO`, `TAB_MOTORISTA` e `TAB_TRAJETO` são três segmentos distintos dentro de um mesmo tablespace. Cada uma crescerá de forma independente, alocando seus próprios extents conforme necessário.

Existem diferentes tipos de segmentos no Oracle:

- **Segmentos de dados (Data Segments):** armazenam os dados das tabelas.
- **Segmentos de índice (Index Segments):** armazenam as estruturas de índice.
- **Segmentos temporários (Temporary Segments):** criados durante operações como `ORDER BY`, `GROUP BY` ou joins que precisam de espaço temporário.
- **Segmentos de UNDO (Rollback Segments):** armazenam as versões anteriores dos dados para suportar rollback de transações e leitura consistente.

---

### Tablespace

O **tablespace** é o nível mais alto da estrutura lógica. Ele é uma coleção nomeada de segmentos, e funciona como uma "gaveta" onde você organiza os objetos do banco. Por exemplo, você pode criar um tablespace `TBS_FROTA_DD` exclusivamente para as tabelas de dados de uma aplicação de frota, e um `TBS_FROTA_IX` exclusivamente para os índices dessa mesma aplicação.

Essa separação traz vantagens reais:
- **Performance:** ao colocar tabelas e índices em tablespaces diferentes (que podem estar em discos diferentes), você distribui a carga de I/O.
- **Manutenção:** você pode colocar um tablespace em modo read-only ou offline sem afetar os outros.
- **Controle de espaço:** você gerencia a quota de espaço por tablespace, e não por objeto individual.

---

## A Estrutura Física: Datafiles

No nível físico, um tablespace é composto por um ou mais **datafiles** — arquivos reais no sistema operacional, com extensões como `.dbf` ou `.dat`. É nesses arquivos que os blocos de dados são de fato gravados no disco.

A relação entre os dois mundos é:

```
Tablespace  →  um ou mais Datafiles  (estrutura física)
Tablespace  →  Segmentos → Extents → Blocos  (estrutura lógica)
```

No exemplo do slide, o tablespace `FROTA` é composto por dois arquivos físicos: `ARQUIVO_01` e `ARQUIVO_02`. Já as tabelas `TAB_VEICULO`, `TAB_MOTORISTA` e `TAB_TRAJETO` existem como segmentos lógicos dentro desse tablespace — mas os dados delas podem estar espalhados pelos dois arquivos físicos de forma transparente.

Isso é uma característica poderosa: **o DBA gerencia os arquivos físicos sem que o desenvolvedor ou o usuário precise saber onde os dados estão fisicamente**. Para a aplicação, tudo é o tablespace; para o sistema operacional, tudo são arquivos.

---

## Resumindo a Hierarquia

Para fixar, a relação de contenção de cima para baixo é:

```
DATABASE
  └── TABLESPACE (lógico) ←→ DATAFILE(s) (físico)
        └── SEGMENTO (tabela, índice, etc.)
              └── EXTENT (conjunto contíguo de blocos)
                    └── ORACLE DATA BLOCK (menor unidade gerenciável)
```

Cada caminho para baixo representa mais granularidade. Quando você pensa em "onde está minha tabela?", a resposta lógica é "num tablespace", e a resposta física é "num ou mais datafiles". O Oracle cuida da tradução entre os dois mundos automaticamente.
