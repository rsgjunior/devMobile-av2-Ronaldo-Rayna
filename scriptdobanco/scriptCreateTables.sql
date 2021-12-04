CREATE TABLE `pessoas` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `tarefas` (
  `id` INT NOT NULL,
  `pessoa_id` INT NULL,
  `titulo` VARCHAR(50) NOT NULL,
  `descricao` VARCHAR(250) NULL,
  `concluida` TINYINT NOT NULL,
  `criada_em` DATETIME NOT NULL,
  `concluida_em` DATETIME NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_pessoa_id`
    FOREIGN KEY (`pessoa_id`)
    REFERENCES `pessoas` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
