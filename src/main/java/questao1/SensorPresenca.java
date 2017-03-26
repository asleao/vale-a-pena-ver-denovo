package questao1;

/**
 * Created by aleao on 26/03/17.
 */
public class SensorPresenca {
    private int pessoas;

    public SensorPresenca(int pessoas) {
        this.pessoas = pessoas;
    }

    public int getPessoas() {
        return pessoas;
    }

    public void setPessoas(int pessoa) {
        this.pessoas += pessoa;
    }
}
