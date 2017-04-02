package questao1;

import java.util.ArrayList;

/**
 * Created by aleao on 26/03/17.
 */
public class Observable {
    private ArrayList<Observer> monitores;

    public Observable() {
        this.monitores = new ArrayList();
    }

    public void addObserver(Observer ob){
        this.monitores.add(ob);
    }

    public void deleteObserver(Observer ob){
        this.monitores.remove(ob);
    }

    public void notifyObserver(){
        for (Observer ob : monitores) {
            ob.update(this);
        }
    }
}
