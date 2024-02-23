const NotDone = ({ item, deleteButtonHandler, changeStatus }) => {
    return (
        <div key={item.id} className="component-style">
            <div className="title">{item.title}</div>
            <div className="body">{item.body}</div>
            <div className="btns">
                <button onClick={() => deleteButtonHandler(item.id)}>삭제하기</button>
                <button onClick={() => changeStatus(item.id)}>완료</button>
            </div>
        </div>
    )
};

export default NotDone;