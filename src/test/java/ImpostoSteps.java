/**
 * Created by aleao on 24/03/17.
 */
import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import questao2.Receita;

import static junit.framework.TestCase.assertEquals;

public class ImpostoSteps {

    private double valorBruto;
    private double impostoCalculado;
    private Receita receita;

    @Dado("^que recebo o salário bruto no valor de ([+-]?[0-9]*[.]?[0-9]+)$")
    public void queReceboOSalárioBrutoNoValorDe(String valorBruto) throws Throwable {
        this.valorBruto = Double.parseDouble(valorBruto);
        this.receita = new Receita(this.valorBruto);
    }

    @Quando("^realizo o cálculo do imposto$")
    public void realizoOCálculoDoImposto() throws Throwable {
        this.impostoCalculado = receita.calculaImposto(this.valorBruto);
    }

    @Então("^o percentual da aliquota deverá ser ([+-]?[0-9]*[.]?[0-9]+)$")
    public void oPercentualDaAliquotaDeveráSer(String aliquota) throws Throwable {
        assertEquals(Double.parseDouble(aliquota),receita.getAliquota());
    }

    @Então("^o valor do imposto caculado ([+-]?[0-9]*[.]?[0-9]+)$")
    public void oValorDoImpostoCaculado(String imposto) throws Throwable {
        assertEquals(Double.parseDouble(imposto),this.impostoCalculado);
    }
}
