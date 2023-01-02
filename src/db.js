import { openDB, deleteDB, wrap, unwrap } from "idb";
import { MemoColor, MemoState } from "./models/memo";

const db = await openDB("memo_db", 1, {
    upgrade(db) {
        db.createObjectStore("notes", {keyPath: 'id', autoIncrement: true})
        loadDefaultNote()
    }
})

async function loadDefaultNote() {
    const db = await openDB("memo_db", 1)
    const store = db.transaction("notes", "readwrite").objectStore("notes")
    store.add({
        "title": "Hello",
        "content": "Ceci est une note de bienvenue",
        "color":  MemoColor.red,
        "progress": MemoState.inProgress
    })
    store.add({
        "title": "Ajouter le votre",
        "content": "Appuyez sur le bouton + pour ajoute votre note",
        "color":  MemoColor.blue,
        "progress": MemoState.inProgress
    })
}

export async function addMemo(title, content, color) {
    const db = await openDB("memo_db", 1)
    const store = db.transaction("notes", "readwrite").objectStore("notes")
    const value = await store.add({
        "title": title,
        "content": content,
        "color": color,
        "progress": MemoState.inProgress
    })
    return value
}

export async function getAll() {
    const db = await openDB("memo_db", 1)
    var e = await db.getAll("notes")
    return e
}

export async function get(id) {
    const db = await openDB("memo_db", 1)
    const store = db.transaction("notes").objectStore("notes")
    var e = await store.get(parseInt(id))
    return e;
}

export async function updateMemo(memo) {
    const db = await openDB("memo_db", 1)
    const store = db.transaction("notes", "readwrite").objectStore("notes")
    return await store.put(memo)
}

export async function deleteMemo(memo) {
    const db = await openDB("memo_db", 1)
    const store = db.transaction("notes", "readwrite").objectStore("notes")
    const value = await store.delete(memo.id)
    return value;
}
