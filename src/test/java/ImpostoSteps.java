/**
 * Created by aleao on 24/03/17.
 */
import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

import static junit.framework.TestCase.assertEquals;

public class ImpostoSteps {

    private double valorBruto;
    private double aliquota;

    @Dado("^possuo o ([+-]?[0-9]*[.]?[0-9]+) e uma ([+-]?[0-9]*[.]?[0-9]+)$")
    public void possuo_o_e_uma(double valorBruto, double aliquota) throws Throwable {
        this.valorBruto = valorBruto;
        this.aliquota = aliquota;
        assertEquals(this.valorBruto,valorBruto);
        assertEquals(this.aliquota,aliquota);
    }

    @Quando("^aplico o percentual da ([+-]?[0-9]*[.]?[0-9]+) no ([+-]?[0-9]*[.]?[0-9]+)$")
    public void aplico_o_percentual_da_no(double aliquota, double valorBruto) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Então("^retorno o valor do ([+-]?[0-9]*[.]?[0-9]+) calculado$")
    public void retorno_o_valor_do_calculado(double arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}
