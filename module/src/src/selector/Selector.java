package selector;

import java.util.LinkedList;
import java.util.List;

/**
 * Created by dgx on 2016/9/19.
 */
public class Selector {
    public static void main(String[] args)
    {
        Person a = new Person("Duan", 18, "China");
        Person b = new Person("Bob", 20, "USA");
        Person c = new Person("X",49,"Jan");
        List<Person> persons = new LinkedList<>();
        persons.add(a);
        persons.add(b);
        persons.add(c);
        Selector s = new Selector();
        s.select(persons,OpType.Search,"age","18");


    }
    public LinkedList<Person> select(List<Person> persons,OpType operator,String prop,String propValue){

        LinkedList<Person> p = new LinkedList<>();
        if(operator == OpType.Search){
            for(Person person:persons){
                if(person.getAge()==Integer.parseInt(propValue));
                p.add(person) ;
            }
        }
        return p;
    }
}
