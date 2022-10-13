export class Memo{
    id
    title
    content
    color
    state

    constructor(id, title, content, color, state){
        this.id = id
        this.title = title
        this.content = content
        this.color = color
        this.state = state
    }
}

export const MemoColor = {
    red: "red",
    blue: "blue",
    green: "green",
    orange: "orange",
    purple: "purple"
}

export const MemoState = {
    inProgress: 0,
    finished: 1
}