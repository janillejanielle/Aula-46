//declarando uma classe ErroFormulario que recebe (herda) atributos e métados da classe Error (classe pai)
class ErroFormulario extends Error{
    //métados para construir um objeto da classe ErroFormulario
    constructor(name, message){

        //sobrescrever o valor da propriedade (atributo) message com o valor que vem do erro da função
        super(message)

        //atribuindo um valor para a propriedade (atributo) name com o nome personalizado do erro
        this.name = name
    }
}


class ErroCPF extends Error{
    //métado para construir um objeto da classe ErroCPF
    constructor(name, message){

        //sobrescrevendo o valor da propriedade (atributo) message com o valor que vem do erro da função
        super(message)

        //atribuindo um valor para a propriedade (atributo) name com o nome personalizado do erro 
        this.name = name
    }
}


try {

    let nome = "Cassiano"
    let idade = 32
    //forçando erro na variável sem valor
    let profissao = "Professor"
    let cpf = "00000000000"

    if(!nome || !idade || !profisao || !cpf){

        //criando um novo objeto da classe ErroFormulario passando com parâmentro o nome e a mensagem
        let erroFormulario = new ErroFormulario("ErroFormulario","Campos em branco não permitidos")

        //dispara (lança) um erro que será capturado no catch
        throw erroFormulario

    }else{

        if(cpf.length != 11){

            let  erroCPF = new ErroCPF("ErroCPF", "Quantidade de caracteres inválida para o CPF")

            throw ErroCPF
        }
        console.lo9g("Usuário cadastrado!")
    }

    //captura o erro enviado pelo throw e coloca o valor na variável "erro" do catch
   } catch (erro) {
       console.log(erro.name)
       console.log(erro.mensagem)
   }