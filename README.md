# C5 tiny package
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/C5m7b4/c5-tiny-package/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/C5m7b4/c5-tiny-package/tree/master)
[![codecov](https://codecov.io/gh/C5m7b4/c5-tiny-package/graph/badge.svg?token=2VW2NXHJ8V)](https://codecov.io/gh/C5m7b4/c5-tiny-package)

this is a little typescript package

## Component in Library

[Select](#select)

[Table](#table)




## Select
| Prop   | Type | Required | Default value |
| :------- | :------: | :-----: | :----- |
| data | anything | ✅ | empty |
| displayValue | keyof data | ✅ | empty |
| label | string | ✅ | empty |
| onSelect | function | | empty |
| labelPosition | 'top', 'left' | | 'top' |


## Table
- Only scroll body. Sticky headers
- Column customizable
- Dynamic Re-ordering
- Stats in the footer
- filtering
- sorting