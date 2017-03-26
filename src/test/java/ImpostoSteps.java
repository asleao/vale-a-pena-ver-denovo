/**
 * Created by aleao on 24/03/17.
 */
import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

import static junit.framework.TestCase.assertEquals;

public class ImpostoSteps {

    private double valorBruto;
    private double aliquota;

    @Dado("^que recebo o salário bruto no valor de ([+-]?[0-9]*[.]?[0-9]+)$")
    public void queReceboOSalárioBrutoNoValorDe(double valorBruto) throws Throwable {
        this.valorBruto = valorBruto;
        assertEquals(this.valorBruto,valorBruto);

    }

    @Quando("^realizo o cálculo do imposto$")
    public void realizoOCálculoDoImposto() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Então("^o percentual da aliquota deverá ser ([+-]?[0-9]*[.]?[0-9]+)$")
    public void oPercentualDaAliquotaDeveráSer(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Então("^o valor do imposto caculado ([+-]?[0-9]*[.]?[0-9]+)$")
    public void oValorDoImpostoCaculado(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}
