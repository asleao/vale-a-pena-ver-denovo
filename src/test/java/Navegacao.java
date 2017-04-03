import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

/**
 * Created by aleao on 02/04/17.
 */
public class Navegacao {
    private String cidades;

    @Dado("^que recebo uma lista: (\\w\\s?,?)+$")
    public void queReceboUmaListaVitoriaSerraColatinaPedroCanario(String cidades) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Quando("^informo o norte$")
    public void informoONorte() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Então("^o sistema deverá retornar a Pedro que está mais próxima daquele ponto$")
    public void oSistemaDeveráRetornarAPedroQueEstáMaisPróximaDaquelePonto() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

}
