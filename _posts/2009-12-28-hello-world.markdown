---
layout: post
---

First! No really, I'm *just* testing my **new blog**.

Oh look, a code example:

{% highlight ruby %}
def squares_upto(limit=10)
  1.upto(limit).map{|x| x * x }.reduce(:+)
  # or...
  (1..limit).map{|x| x * x }.reduce(:+)
end
{% endhighlight %}

With line numbers:

{% highlight ruby linenos %}
def foobar(boo, baz="asdf")
  (1..10).map{|x| x * x }.reduce(:+)
end

def foobar(boo, baz="asdf")
  (1..10).map{|x| x * x }.reduce(:+)
end

def foobar(boo, baz="asdf")
  (1..10).map{|x| x * x }.reduce(:+)
end

def foobar(boo, baz="asdf")
  (1..10).map{|x| x * x }.reduce(:+)
end

def foobar(boo, baz="asdf")
  (1..10).map{|x| x * x }.reduce(:+)
end
{% endhighlight %}

Even ooc highlighting!

{% highlight ooc %}
Vector3f: class {
  x, y, z : Float
}

vec := Vector3f new()
vec x = 3.14
vec y = 6.18
vec z = 42.0 // hey, Java/C/C++/C# guys: look! no dots =)
printf("Our vector is (%f, %f, %f)\n", vec x, vec y, vec z)
{% endhighlight %}

Math Example: $x^{n}+y^{n} \neq z^{n}$ for $n \geq 3$

A big one:

\[
\sum_{n=1}^\infty \frac{1}{n}
\text{ is divergent, but }
\lim_{n \to \infty} \sum_{i=1}^n \frac{1}{i} - \ln n \text{ exists.}
\]
