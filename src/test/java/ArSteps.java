import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import questao1.ArCondicionado;
import questao1.SensorTemperatura;

/**
 * Created by aleao on 24/03/17.
 */
public class ArSteps {

    private ArCondicionado arCondicionado;
    private SensorTemperatura sensorExternoUm;
    private SensorTemperatura sensorExternoDois;
    private SensorTemperatura sensorExternoTres;

    public ArSteps(){
        arCondicionado = new ArCondicionado();
    }

    @Given("^os valores dos sensores X, Y, Z respectivamente (-?\\d+),(-?\\d+),(-?\\d+)$")
    public void os_valores_dos_sensores_X_Y_Z_respectivamente(int arg1, int arg2, int arg3) throws Throwable {
        this.sensorExternoUm = new SensorTemperatura(arg1);
        this.sensorExternoDois = new SensorTemperatura(arg2);
        this.sensorExternoTres = new SensorTemperatura(arg3);
    }

    @When("^realizo a media dos valores de cada sensor$")
    public void realizo_a_media_dos_valores_de_cada_sensor() throws Throwable {
          this.arCondicionado.calculaMedia(sensorExternoUm,sensorExternoDois,sensorExternoTres);
    }

    @Then("^o ar condicionado retorna o valor da (-?\\d+) ambiente$")
    public void o_ar_condicionado_retorna_o_valor_da_ambiente(int arg1) throws Throwable {
        Assert.assertEquals(arg1,this.arCondicionado.getTemperaturaExterna());
    }
}
