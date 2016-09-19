package open;

/**
 * Created by dgx on 2016/9/9.
 */
public interface Mapper<E,F> {
    F parse(E source);
}
