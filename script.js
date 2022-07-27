let nameSpaceship = window.prompt('Insira o nome da Nave')
let velocity = 0

function ShowMenu() {
    let choice = window.prompt('1 - Acelerar a nave em 5km/s \n' +
        '2 - Desacelerar em 5km/s \n' +
        '3 - Imprimir dados de bordo \n' +
        '4 - Sair do programa \n')

    switch (choice) {
        case '1':
            Aceleration()
            break;
        case '2':
            Slowing()
            break;
        case '3':
            Logdata()
        case '4':
            Exit()
            break;
        default:
            alert('Fora do Escopo! ')
            ShowMenu()
            break;
    }
}

function Aceleration() {
    velocity = velocity + 5
    alert('Velocidade Atual: ' + velocity)
    ShowMenu()
}

function Slowing() {
    velocity = velocity - 5
    if (velocity < 0) {
        velocity = 0
    }
    alert('Velocidade Atual: ' + velocity)
    ShowMenu()
}

function Logdata() {
    alert('Nome da nave ' + nameSpaceship + " \n"
        + 'Velocidade Atual ' + velocity + "km/s")
        ShowMenu()
}

function Exit() {
    alert('Finalizando o programa')
}

ShowMenu()