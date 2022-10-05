import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/respsota";

const questoes: QuestaoModel[] = [
    new QuestaoModel(300, 'qual bicho transmite a doença de chagas ?',[
          RespostaModel.errada('abelha'),
          RespostaModel.errada('Pulga'),
          RespostaModel.errada('Barata'),
          RespostaModel.certa('Barbeiro'),
   ]),
    new QuestaoModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum" ?', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('Chucu'),
        RespostaModel.certa('Abóbora'),
    ]),
    new QuestaoModel(203, 'Qual é o coletivo de cães?', [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha'),
    ]),
    new QuestaoModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        RespostaModel.errada('Equilátero'),
        RespostaModel.errada('Isóceles'),
        RespostaModel.errada('Trapézio'),
        RespostaModel.certa('Escaleno'),
    ]),
]
export default questoes