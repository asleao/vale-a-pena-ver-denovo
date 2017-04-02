import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import questao4.model.Calculadora;
import static junit.framework.TestCase.*;

/**
 * Created by aleao on 02/04/17.
 */
public class CalculadoraSteps {
    private String expressao;
    private double resultado;
    private Calculadora calculadora = new Calculadora();

    @Dado("^que recebo uma sequencia de ([^\"]*) a serem feitas$")
    public void queReceboUmaSequenciaDeASeremFeitas(String expr) throws Throwable {
        this.expressao = expr;
        assertNotNull(this.expressao);
    }

    @Quando("^realizo o cálculo$")
    public void realizoOCálculo() throws Throwable {
        this.resultado = this.calculadora.evaluate(this.expressao);
    }

    @Então("^o ([^\"]*) deverá ser exibido para o usuário\\.$")
    public void oDeveráSerExibidoParaOUsuário(String resultado) throws Throwable {
       assertEquals(Double.parseDouble(resultado),this.resultado);
    }
}
