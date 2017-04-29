This is a reference to implementation of the app.

Need to be able to organize what to do, so can understand approach.
Need to retrieve the api for newton, which is here:
https://newton.now.sh/:operation/:expression
Will remove from here whn appropriate.

In ":operation", will insert an acceptable operation command:

Simplify:           simplify
Factor:             factor
Derive:             derive
Integrate:          integrate
Find 0's:           zeroes
Find Tangent:       tangent
Area Under Curve:   area
Cosine:             cos
Sine:               sin
Tangent:            tan
Inverse Cosine:     arccos
Inverse Sine:       arcsin
Inverse tangent:    arctan
Absolute Value:     abs
Logarithm:          log

In ":expression", will insert a text that is an appropriate equation.
EXAMPLE PATH: /abs/-15

Note: "Find Tangent", "Area Under Curve", and "Logarithmic"
      requires a vericle bar "|" to work...
      EXAMPLE PATH: /log/3|9
      For "Area Under Curve", requires a colon ":" to 
      seperate endpoints...
      EXAMPLE PATH: /area/2:7|3x+5
No spaces for primitive operations like "+".

":expression" uses url-encoding so need to keep in mind.

Response is in the following JSON format:

{
  "operation": "cos",
  "expression": "pi",
  "result": "-1"
}

All need to understand is GET requires API url...
EXAMPLE URL: https://newton.now.sh/tangent/4|x%5e2
Note: "x%5e2" === "x^2"