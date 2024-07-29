---
title: HDL
---
# Calculo del HDL a partir de Colesterol total

### Algunos colesteroles mayores a 200:

| Col |  HDL | Col/3y5 |
| --- | ---- | ------- |
| 218 | 48.8 | 43.6    |
| 224 | 42.8 | 44.8    |

### Algunos colesteroles menores a 200:
| Col |  HDL | Col/3   | Col/4 |
| --- | ---- | ------- | ----- |
| 155 | 34.1 | 51.667  | 38.75 |
| 158 | 41.0 | 52.66   | 39.5  |



col : cHdl : calcHdl
155 : 34.1 : 51.667
158 : 41.0 : 52.66 
218 : 48.8 : 43.6
224 : 42.8 : 44.8

Las divisiones entre 5 de los valores de colesterol superiores a 200 son mas exactas con los valores reales que las divididas entre 3 de valores menores a 200.

Podemos encontrar un valor intermedio para dividir
Podemos emplear numeros entre 3 y 5 para los valores menores a 200

Con 4 se consiguen valores mas cercanos a los reales.
Refinaremos con el tiempo esta formula, pero por ahora quedara asi:

if colTotal > 200 { HDL = colTotal/5 }
if colTotal < 200 { HDL = colTotal/4 }
