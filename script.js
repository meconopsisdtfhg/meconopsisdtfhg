const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
const cartCount=document.getElementById('cartCount');
const toast=document.getElementById('toast');
let cart=0;

menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.querySelectorAll('.add-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    cart++;
    cartCount.textContent=cart;
    toast.textContent=btn.dataset.name+' added to bag';
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'),1800);
  });
});

document.querySelectorAll('.filter').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter=btn.dataset.filter;
    document.querySelectorAll('.product-card').forEach(card=>{
      card.classList.toggle('hidden',filter!=='all'&&card.dataset.category!==filter);
    });
  });
});

document.getElementById('newsletterForm').addEventListener('submit',e=>{
  e.preventDefault();
  const email=document.getElementById('email');
  document.getElementById('formMessage').textContent=`Thank you. ${email.value} has been added to the Meconopsisdtfhg list.`;
  email.value='';
});
