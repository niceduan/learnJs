package open;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

/**
 * Created by dgx on 2016/9/9.
 */
public class Test {
    public static void main(String[] args){
        LinkedList<Integer> integers1 = new LinkedList<Integer>(Arrays.asList(1,2,3,4,5,6,7,8,9));

        LinkedList<String> strings;
        XXX mapper = new XXX();
        strings = toStrings(integers1, source -> (++source)+"-");
        System.out.println(strings);
        Lists<Integer> integers= new Lists<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8));
        Mapper<Integer,String> mapper1 = new XXX();
        //integers.filter(x->x>5).transform(mapper1);
        System.out.println(integers.filter(x->x>5).transform(mapper1));

    }
    public static LinkedList<String> toStrings (List<Integer> integers, Mapper<Integer,String> mapper){
        LinkedList<String> linkedList = new LinkedList<String>();
        for(Integer integer:integers){
           linkedList.add(mapper.parse(integer));
        }
        return linkedList;
    }
    static class XXX implements Mapper<Integer,String>{

        @Override
        public String parse(Integer source) {
            return source+"-+";
        }
    }

}