import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import org.junit.Assert;
import questao1.ArCondicionado;
import questao1.SensorPresenca;
import questao1.SensorTemperatura;
import static junit.framework.TestCase.assertEquals;

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

    @Dado("^os valores dos sensores X, Y, Z respectivamente (-?\\d+),(-?\\d+),(-?\\d+)$")
    public void osValoresDosSensoresXYZRespectivamente(int arg1, int arg2, int arg3) throws Throwable {
        this.sensorExternoUm = new SensorTemperatura(arg1);
        this.sensorExternoDois = new SensorTemperatura(arg2);
        this.sensorExternoTres = new SensorTemperatura(arg3);
    }

    @Quando("^realizo a media dos valores de cada sensor$")
    public void realizoAMediaDosValoresDeCadaSensor() throws Throwable {
        int  media = this.arCondicionado.calculaMedia(sensorExternoUm.getTemperatura(),sensorExternoDois.getTemperatura(),sensorExternoTres.getTemperatura());
        this.arCondicionado.setTemperaturaExterna(media);
    }

    @Então("^o ar condicionado retorna o valor da (-?\\d+) ambiente$")
    public void oArCondicionadoRetornaOValorDaAmbiente(int arg1) throws Throwable {
        Assert.assertEquals(arg1,this.arCondicionado.getTemperaturaExterna());
    }

    //Cenario: 2
    int quantidadePessoas=0;
    int mediaSensor = 0;
    SensorPresenca sensorX;
    SensorPresenca sensorY;
    SensorPresenca sensorZ;


    @Dado("^que possuem (\\d+) pessoas em uma sala de aula$")
    public void quePossuemPessoasEmUmaSalaDeAula(int quantidadePessoas) throws Throwable {
        this.quantidadePessoas = quantidadePessoas;
    }

    @Quando("^os sensores (\\d+), (\\d+) e (\\d+) identificam a quantidade de pessoas na sala$")
    public void osSensoresEIdentificamAQuantidadeDePessoasNaSala(int sensorX, int sensorY, int sensorZ) throws Throwable {
        this.sensorX = new SensorPresenca(sensorX);
        this.sensorY = new SensorPresenca(sensorY);
        this.sensorZ = new SensorPresenca(sensorZ);
        this.mediaSensor = this.arCondicionado.calculaMedia(this.sensorX.getPessoas(),this.sensorY.getPessoas(),this.sensorZ.getPessoas());

    }

    @Então("^o ar condicionado aumenta a (\\d+) em (\\d+) grau para cada pessoa identificada\\.$")
    public void oArCondicionadoAumentaAEmGrauParaCadaPessoaIdentificada(int temperatura, int grau) throws Throwable {
        this.arCondicionado.setTemperaturaInterna(this.mediaSensor);
        assertEquals(temperatura,this.arCondicionado.getTemperaturaInterna());
    }
}
