package java;

import java.util.*;

public class validAnagram {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()){
        return false;
        }
        char [] array1 = s.toCharArray();
        char [] array2 = t.toCharArray();
        Arrays.sort(array1);
        Arrays.sort(array2);
        return Arrays.equals(array1,array2);
    }
}
