import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

/**
 * Created by dgx on 2016/8/4.
 */
public class Test {
    public static void main(String[] args)
    {
        Lists<Integer> integers = new Lists<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8));

        Mapper<Integer, String> mapper = new XXX();



        System.out.println(integers
                .filter(x -> x > 5)
                .transform(mapper));
    }

    private static LinkedList<String> toStrings(List<Integer> integers,Mapper<Integer,String> mapper) {
        LinkedList<String> strings = new LinkedList<>();
        for (Integer integer : integers) {
            strings.add(mapper.parse(integer));
        }
        return strings;
    }

static class XXX implements Mapper<Integer, String>{
    @Override
    public String parse(Integer integer) {
        return integer + "-";
    }
}

}
