
function handleChange(setSubject, field, id) {
  return (e) =>
    setSubject((prev) =>
      prev.map((sbj) =>
        sbj.id === id ? { ...sbj, [field]: e.target.value } : sbj
      )
    );
}

function submitInfo(setSubject, e, id) {
  e.preventDefault()  
  setSubject((prev) =>
    prev.map((sbj) =>
      sbj.id === id ? { ...sbj, submit: !sbj.submit } : sbj
    )
  );
}

function deleteForm(setSubject, id) {
  setSubject((prev) => prev.filter((sbj) => sbj.id !== id));
}

function preventEnter(e){
    if (e.key === 'Enter'){
        e.preventDefault()
    }
}

export { handleChange, submitInfo, deleteForm, preventEnter };
