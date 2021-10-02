const data = {
    'Aashirvaad Atta 10 kg': 399,
    'Aashirvaad Atta 5 kg': 209,
};
const selected = {
    pack: false,
    packid: null,
};

const updatenumber = (action) => {
    const element = document.getElementById('Quantitynumber');
    const elementvalue = parseInt(element.innerHTML);

    switch (action) {
        case 'increase':
            element.innerHTML = elementvalue + 1;
            break;
        case 'decrease':
            if (elementvalue > 0)
                element.innerHTML = elementvalue - 1;
            break;
        default:
            //nothing should happen here..
            break;
    }
};

const resetselection = (e) => {
    const siblings = e.target.parentElement.children;
    for (let i = 0; i < siblings.length; i++) {
        siblings[i].style.backgroundColor = 'white';
    }
};

const actionmaker = (e) => {
    switch (e.target.id) {
        case 'increase':
            updatenumber('increase');
            break;
        case 'decrease':
            updatenumber('decrease');
            break;
        case 'attapacksize10':
            resetselection(e);
            e.target.style.backgroundColor = 'green';
            selected.pack = true;
            selected.packid = e.target.id;
            break;
        case 'attapacksize5':
            resetselection(e);
            e.target.style.backgroundColor = 'green';
            selected.packid = e.target.id;
            selected.pack = true;
            break;
        default:
            //for now nothing..
            break;
    }
    if (selected.pack) {
        const elementvalue = parseInt(
            document.getElementById('Quantitynumber').innerHTML,
        );
        updatetotalprice(
            calculateprice(selected.packid, elementvalue),
        );
        console.log('updated');
    }
};

const getSelectionprice = (selected_pack) => {
    switch (selected_pack) {
        case 'attapacksize10':
            return data['Aashirvaad Atta 10 kg'];
        case 'attapacksize5':
            return data['Aashirvaad Atta 5 kg'];
        default:
            return 0;
    }
};

const updatetotalprice = (totalprice) => {
    const element = document.getElementById('calculatedval');
    element.innerHTML = 'Rs:' + totalprice;
};

const calculateprice = (selected_pack, quantity) => {
    return getSelectionprice(selected_pack) * quantity;
};
