package open;

/**
 * Created by dgx on 2016/9/10.
 */
public interface Filter<T> {
    public boolean match(T e);
}
