package questao2;

/**
 * Created by aleao on 26/03/17.
 */
public class Faixa4 implements ImpostoStrategy {
    public double calculaImposto(double valorBruto) {
        double imposto=0.0;
        if ((valorBruto>=3418.60) && (valorBruto<4271.59)) {
            imposto = valorBruto * (getAliquota() / 100);
        }
        return Math.round(imposto*100.0)/100.0;
    }

    public double getAliquota() {
        return 22.5;
    }
}
