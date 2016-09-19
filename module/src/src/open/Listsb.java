package open;

import java.util.*;
import java.util.function.Consumer;
import java.util.function.Predicate;
import java.util.function.UnaryOperator;
import java.util.stream.Stream;

/**
 * Created by dgx on 2016/9/10.
 */
public class Listsb<E> implements List<E> {
    private List<E> ta;

    @Override
    public int size() {
        return ta.size();
    }

    @Override
    public boolean isEmpty() {
        return ta.isEmpty();
    }

    @Override
    public boolean contains(Object o) {
        return ta.contains(o);
    }

    @Override
    public Iterator<E> iterator() {
        return ta.iterator();
    }

    @Override
    public Object[] toArray() {
        return ta.toArray();
    }

    @Override
    public <T> T[] toArray(T[] a) {
        return ta.toArray(a);
    }

    @Override
    public boolean add(E e) {
        return ta.add(e);
    }

    @Override
    public boolean remove(Object o) {
        return ta.remove(o);
    }

    @Override
    public boolean containsAll(Collection<?> c) {
        return ta.containsAll(c);
    }

    @Override
    public boolean addAll(Collection<? extends E> c) {
        return ta.addAll(c);
    }

    @Override
    public boolean addAll(int index, Collection<? extends E> c) {
        return ta.addAll(index, c);
    }

    @Override
    public boolean removeAll(Collection<?> c) {
        return ta.removeAll(c);
    }

    @Override
    public boolean retainAll(Collection<?> c) {
        return ta.retainAll(c);
    }

    @Override
    public void replaceAll(UnaryOperator<E> operator) {
        ta.replaceAll(operator);
    }

    @Override
    public void sort(Comparator<? super E> c) {
        ta.sort(c);
    }

    @Override
    public void clear() {
        ta.clear();
    }

    @Override
    public boolean equals(Object o) {
        return ta.equals(o);
    }

    @Override
    public int hashCode() {
        return ta.hashCode();
    }

    @Override
    public E get(int index) {
        return ta.get(index);
    }

    @Override
    public E set(int index, E element) {
        return ta.set(index, element);
    }

    @Override
    public void add(int index, E element) {
        ta.add(index, element);
    }

    @Override
    public E remove(int index) {
        return ta.remove(index);
    }

    @Override
    public int indexOf(Object o) {
        return ta.indexOf(o);
    }

    @Override
    public int lastIndexOf(Object o) {
        return ta.lastIndexOf(o);
    }

    @Override
    public ListIterator<E> listIterator() {
        return ta.listIterator();
    }

    @Override
    public ListIterator<E> listIterator(int index) {
        return ta.listIterator(index);
    }

    @Override
    public List<E> subList(int fromIndex, int toIndex) {
        return ta.subList(fromIndex, toIndex);
    }

    @Override
    public Spliterator<E> spliterator() {
        return ta.spliterator();
    }

    @Override
    public boolean removeIf(Predicate<? super E> filter) {
        return ta.removeIf(filter);
    }

    @Override
    public Stream<E> stream() {
        return ta.stream();
    }

    @Override
    public Stream<E> parallelStream() {
        return ta.parallelStream();
    }

    @Override
    public void forEach(Consumer<? super E> action) {
        ta.forEach(action);
    }
}
