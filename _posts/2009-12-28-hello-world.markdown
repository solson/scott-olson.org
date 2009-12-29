---
layout: post
---

First! No really, I'm *just* testing my **new blog**.

Oh look, a code example:

{% highlight ruby %}
def sum_squares_upto(limit)
  1.upto(limit).map{|x| x * x }.reduce(:+)
  # or...
  (1..limit).map{|x| x * x }.reduce(:+)
end

sum_squares_upto(10) #=> 385
{% endhighlight %}

With line numbers:

{% highlight ruby linenos %}
# The Greeter class
class Greeter
  def initialize(name)
    @name = name.capitalize
  end

  def salute
    puts "Hello #{@name}!"
  end
end

# Create a new object
g = Greeter.new("world")

# Output "Hello World!"
g.salute
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

Io example:

{% highlight io %}
sumSquaresUpTo := method(limit,
  # sum is the same as reduce(+)
  Range clone setRange(1, limit) map(**2) sum
)

sumSquaresUpTo(10) #==> 385
{% endhighlight %}

Inline math example: $x^{n}+y^{n} \neq z^{n}$ for $n \geq 3$

And big one:

\[
\sum_{n=1}^\infty \frac{1}{n}
\text{ is divergent, but }
\lim_{n \to \infty} \sum_{i=1}^n \frac{1}{i} - \ln n \text{ exists.}
\]
