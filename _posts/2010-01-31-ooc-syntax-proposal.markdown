---
layout: post
---

A proposal for ooc:

{% highlight ooc %}
Void: cover void
Pointer: cover Void* {
  toString: func -> String { "%p" format(this) }
}

TMStruct: cover from struct tm {
  tm_sec, tm_min, tm_hour, tm_mday, tm_mon, tm_year, tm_wday, tm_yday, tm_isdst : extern Int
}

TMStruct: extern(struct tm) struct {
  tm_sec, tm_min, tm_hour, tm_mday, tm_mon, tm_year, tm_wday, tm_yday, tm_isdst: extern Int
}

MyStruct: struct {
  foo, bar, baz: String

  all: func -> String {
    foo + bar + baz
  }
}

Char: cover from char { ... }
SChar: cover from signed char extends Char
UChar: cover from unsigned char extends Char

Char: extern(char)
SChar: extern(signed char) extends Char
UChar: extern(unsigned char) extends Char

String: cover from Char* { ... }

LLong: cover from signed long long { ... }
Long:  cover from signed long  extends LLong
Int:   cover from signed int   extends LLong
Short: cover from signed short extends LLong

ULLong: cover from unsigned long long extends LLong { ... }
ULong:  cover from unsigned long  extends ULLong
UInt:   cover from unsigned int   extends ULLong
UShort: cover from unsigned short extends ULLong

Int8:  cover from int8_t  extends LLong
Int16: cover from int16_t extends LLong
Int32: cover from int32_t extends LLong
Int64: cover from int64_t extends LLong

UInt8:  cover from uint8_t  extends ULLong
UInt16: cover from uint16_t extends ULLong
UInt32: cover from uint32_t extends ULLong
UInt64: cover from uint64_t extends ULLong

Octet: cover from UInt8 extends ULLong
SizeT: cover from size_t extends LLong
PtrDiffT: cover from ptrdiff_t extends LLong

Bool: cover from bool { ... }

LDouble: cover from long double { ... }
Float: cover from float extends LDouble
Double: cover from double extends LDouble

Range: cover {

    min, max: Int
    
    new: static func (.min, .max) -> This {
        this : This
        this min = min
        this max = max
        return this
    }

}

{% endhighlight %}

