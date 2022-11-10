
        let tareas = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        const addHomework = (ev)=>{
            ev.preventDefault();  //to stop the form submitting

            let tarea = {
                id: Date.now(),
                title: document.getElementById('title').value,
                description: document.getElementById('description').value,
                subject: document.getElementById('subject').value,
                date: document.getElementById('date').value

            }
            tareas.push(tarea);

            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            console.warn('added' , {tareas} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify(tareas, '\t', 2);

            //saving to localStorage
            localStorage.setItem('taeasList', JSON.stringify(tareas) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addHomework);
        });
