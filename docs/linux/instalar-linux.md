---
sidebar_position: 1
---
# Como Instalar o Linux (Ubuntu)

Este guia fornece um passo a passo para instalar o Ubuntu, uma das distribuições Linux mais populares, em seu computador.

## Pré-requisitos
- Um pen drive de pelo menos 8GB.
- Backup de seus arquivos importantes.
- Conexão com a internet.

## Passo 1: Baixar a ISO do Ubuntu
1. Acesse o site oficial do [Ubuntu](https://ubuntu.com/download/desktop).
2. Baixe a versão LTS (Long Term Support) mais recente.

## Passo 2: Criar um Pen Drive Bootável
Para gravar a ISO no pen drive, você pode usar ferramentas como:
- **Rufus** (Windows)
- **BalenaEtcher** (Windows, macOS, Linux)
- **Ventoy** (Recomendado para múltiplos sistemas)

## Passo 3: Configurar o BIOS/UEFI
1. Reinicie o computador e pressione a tecla de acesso ao BIOS (geralmente `F2`, `F12`, `Del` ou `Esc`).
2. Altere a ordem de boot para iniciar pelo **USB**.
3. Desative o "Secure Boot" se necessário (embora o Ubuntu suporte).

## Passo 4: O Processo de Instalação
1. Ao iniciar pelo pen drive, selecione **"Try or Install Ubuntu"**.
2. Escolha o idioma (Português do Brasil) e clique em **"Instalar Ubuntu"**.
3. Siga as instruções na tela:
   - Layout do teclado.
   - Tipo de instalação (Normal ou Mínima).
   - Particionamento (Se for iniciante, escolha "Apagar disco e instalar Ubuntu" ou "Instalar ao lado do Windows").
4. Defina seu nome de usuário e senha.

## Passo 5: Finalização
1. Aguarde a conclusão da cópia dos arquivos.
2. Remova o pen drive quando solicitado e reinicie o computador.
3. Parabéns! Você agora tem o Linux instalado.

## Dicas Pós-Instalação
- Execute `sudo apt update && sudo apt upgrade` no terminal para atualizar o sistema.
- Explore a "Software Center" para instalar novos aplicativos.
