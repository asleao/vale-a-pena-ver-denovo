package questao2;

/**
 * Created by aleao on 26/03/17.
 */
public class Faixa2 implements ImpostoStrategy{
    public double calculaImposto(double valorBruto) {
        double imposto = 0.0;
        if((valorBruto>=1710.79) && (valorBruto<2563.92)) {
            imposto = valorBruto * (getAliquota() / 100);
        }
        return Math.round(imposto*100.0)/100.0;
    }

    public double getAliquota() {
        return 7.5;
    }
}
