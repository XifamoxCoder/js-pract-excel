import {ExcelComponent} from "@core/ExcelComponent"
import {createTable} from "@/components/table/table.template"
import {resizeHandler} from "@/components/table/table.resize";
import {shouldResult} from "@/components/table/table.function";

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable(20)
  }
  onMousedown(event) {
    if (shouldResult(event)) {
      resizeHandler(this.$root, event)
    }
  }
}
