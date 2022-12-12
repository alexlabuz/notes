export class Memo{
    idNote
    title
    content
    color
    state

    constructor(title, content, color, state){
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