/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package questao3.model;

import questao3.control.Cidade;
import java.util.Stack;

/**
 *
 * @author Leticia
 */
public class MaisOeste extends AbstractAvaliadorDirecional{
    
    public MaisOeste() {
        this.direcao = "Oeste";
    }
    
    @Override
    protected String[] matchingWords() {
        return new String[]{"Oeste"};
    }
    
    @Override
    public Cidade executar(Stack<Cidade> expressoes) {
        Cidade cidadeResultante = this.cidadeAtual;
        while(!expressoes.empty()){
            Cidade token = expressoes.pop();
            if(cidadeResultante.getLongitude()> token.getLongitude()){
                cidadeResultante = token;
            }
        }
        return cidadeResultante;
    }

}
