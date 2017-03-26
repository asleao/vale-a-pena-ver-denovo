package questao2;

/**
 * Created by aleao on 26/03/17.
 */
public class Faixa1 implements ImpostoStrategy{
    public double calculaImposto(double valorBruto) {
        double imposto=0.0;
        if(valorBruto<1710.79){
            imposto = 0;
        }
        return imposto;
    }

    public double getAliquota() {
        return 0.0;
    }
}
