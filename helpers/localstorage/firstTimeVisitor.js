
export const firstTimeVisitor = () => {
    if (typeof window !== 'undefined') {
        const applyToken = localStorage.setItem("firstTime", JSON.stringify(true))
        return applyToken
    }

}

