package selector;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by dgx on 2016/9/20.
 */
public enum OpType {
    Search("查询");

    private static Map<String, OpType> valueMap = new HashMap<String, OpType>();
    private static HashMap<String,String> valueTag = new HashMap<>();
    public static OpType parse(String value) {
        return valueMap.get(value);
    }

    static {
        for (OpType item : OpType.values()) {
            valueMap.put(item.toString(), item);
            valueTag.put(item.toString(),item.getLabel());
        }
    }

    private OpType(String label) {
        this.label = label;
    }
    private String label;
    public String getLabel() {
        return label;
    }

}
