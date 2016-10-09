package selector;

import com.sun.org.apache.xml.internal.resolver.helpers.PublicId;

/**
 * Created by dgx on 2016/9/20.
 */
public class Person {
    private String name;
    private Integer age;
    private String country;

    public Person(){}
    public Person(String name,int age,String country)
    {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}
