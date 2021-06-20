# EventManager
## administrador de eventos

O EventManager tem como objetivo gerenciar eventos, focado na criação de 
eventos escolares, palestras, workshops e outros eventos que possam ser 
criados por escolas ou professores.

A tecnologia escolhida para a utilização foi NodeJS com a linguagem Typescript 
em seu backend, o motivo é basicamente pela facilidade de implementação de 
websockets para manter o contato.

O projeto foi pensado em eventos escolares. A instituição IFSP Salto durante o 
ano letivo realiza vários eventos com enfoque nos alunos, um dos exemplos é o 
Flisol, evento no qual existem diversas palestras e workshops ocorrendo. 

Como necessidade deste projeto ele deve administrar as atividades do evento 
(palestras e workshops), colher feedbacks e retirar dúvidas. Surgindo assim o 
EventManager com as seguintes funcionalidades: Cadastro de usuários, 
gerenciamento de atividades, chat para remoção de dúvidas. 

O participante do evento pode dar feedbacks das atividades através da página
da atividade em que foi participante, e pode retirar as dúvidas com os gerentes 
do evento através de chat. O participante tem o controle sobre o evento da 
seguinte forma: Se matricular no evento e remover sua matrícula.

Em contrapartida o Gerente do evento pode responder as dúvidas e manipular 
os eventos/atividades em que faz parte (Criar, editar, deletar, visualizar).
