import java.util.*;
import java.util.function.Consumer;
import java.util.function.Predicate;
import java.util.function.UnaryOperator;
import java.util.stream.Stream;

/**
 * Created by dgx on 2016/9/9.
 */
public class Lists<E> implements List<E> {
    private final List<E> target;

    public Lists(List<E> target) {
        this.target = target;
    }

    public <F> Lists<F> transform(Mapper<E,F> mapper){
        LinkedList<F> strings = new LinkedList<>();
        Lists<F> fs = new Lists<>(strings);
        for (E e : this) {
            fs.add(mapper.parse(e));
        }
        return fs;
    }

    @Override
    public String toString() {
       return target.toString();
    }

    public  Lists<E> filter(Filter<E> filter){
        LinkedList<E> strings = new LinkedList<>();
        Lists<E> fs = new Lists<>(strings);
        for (E e : this) {
            if (filter.match(e)){
                fs.add(e);
            }
        }
        return fs;
    }

    @Override
    public int size() {
        return target.size();
    }

    @Override
    public boolean isEmpty() {
        return target.isEmpty();
    }

    @Override
    public boolean contains(Object o) {
        return target.contains(o);
    }

    @Override
    public Iterator<E> iterator() {
        return target.iterator();
    }

    @Override
    public Object[] toArray() {
        return target.toArray();
    }

    @Override
    public <T> T[] toArray(T[] a) {
        return target.toArray(a);
    }

    @Override
    public boolean add(E e) {
        return target.add(e);
    }

    @Override
    public boolean remove(Object o) {
        return target.remove(o);
    }

    @Override
    public boolean containsAll(Collection<?> c) {
        return target.containsAll(c);
    }

    @Override
    public boolean addAll(Collection<? extends E> c) {
        return target.addAll(c);
    }

    @Override
    public boolean addAll(int index, Collection<? extends E> c) {
        return target.addAll(index, c);
    }

    @Override
    public boolean removeAll(Collection<?> c) {
        return target.removeAll(c);
    }

    @Override
    public boolean retainAll(Collection<?> c) {
        return target.retainAll(c);
    }

    @Override
    public void replaceAll(UnaryOperator<E> operator) {
        target.replaceAll(operator);
    }

    @Override
    public void sort(Comparator<? super E> c) {
        target.sort(c);
    }

    @Override
    public void clear() {
        target.clear();
    }

    @Override
    public boolean equals(Object o) {
        return target.equals(o);
    }

    @Override
    public int hashCode() {
        return target.hashCode();
    }

    @Override
    public E get(int index) {
        return target.get(index);
    }

    @Override
    public E set(int index, E element) {
        return target.set(index, element);
    }

    @Override
    public void add(int index, E element) {
        target.add(index, element);
    }

    @Override
    public E remove(int index) {
        return target.remove(index);
    }

    @Override
    public int indexOf(Object o) {
        return target.indexOf(o);
    }

    @Override
    public int lastIndexOf(Object o) {
        return target.lastIndexOf(o);
    }

    @Override
    public ListIterator<E> listIterator() {
        return target.listIterator();
    }

    @Override
    public ListIterator<E> listIterator(int index) {
        return target.listIterator(index);
    }

    @Override
    public List<E> subList(int fromIndex, int toIndex) {
        return target.subList(fromIndex, toIndex);
    }

    @Override
    public Spliterator<E> spliterator() {
        return target.spliterator();
    }

    @Override
    public boolean removeIf(Predicate<? super E> filter) {
        return target.removeIf(filter);
    }

    @Override
    public Stream<E> stream() {
        return target.stream();
    }

    @Override
    public Stream<E> parallelStream() {
        return target.parallelStream();
    }

    @Override
    public void forEach(Consumer<? super E> action) {
        target.forEach(action);
    }
}
