<?php
include 'criarAcesso.php'; // Certifique-se de ter um arquivo de conexão

$sql = "CREATE TABLE IF NOT EXISTS users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    usu VARCHAR(30) NOT NULL,
    passW VARCHAR(255) NOT NULL
)";

if ($conn->query($sql) === TRUE) {
    echo "Tabela criada com sucesso";
} else {
    echo "Erro ao criar tabela: " . $conn->error;
}

$conn->close();
?>
