import {JSX, splitProps} from "solid-js";
import localStyle from './JBTextarea.module.pcss'
import {geneComponentTestProperty, mergeClasses} from '@hanhan9449/utils'

export type JBTextareaProps = {} & JSX.TextareaHTMLAttributes<HTMLTextAreaElement>
export function JBTextarea(p: JBTextareaProps) {
    const [local, rest] = splitProps(p, ['class'])
    return <div
        class={localStyle.container}
    ><textarea
        {...geneComponentTestProperty('JBTextarea')}
        class={mergeClasses(localStyle.textarea, local.class)}
        {...rest}/></div>
}