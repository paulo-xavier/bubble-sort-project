// Function to simulate Bubble Sort
async function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        // Mark the elements being compared for animation
        const elements = document.querySelectorAll(".element");
        elements[i].style.animation = "color-change 0.5s ease-in-out";
        elements[i + 1].style.animation = "color-change 0.5s ease-in-out";
  
        await new Promise((resolve) => setTimeout(resolve, 1000));
  
        if (arr[i] > arr[i + 1]) {
          // Swap the elements
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
  
          // Update the elements in the DOM for animation
          sortingContainer.innerHTML = ""; // Clear the current elements
          for (const element of arr) {
            const el = document.createElement("div");
            el.className = "element";
            el.textContent = element;
            sortingContainer.appendChild(el);
          }
  
          await new Promise((resolve) => setTimeout(resolve, 1000));
          swapped = true;
        }
  
        // Reset color for the elements
        elements[i].style.animation = "";
        elements[i + 1].style.animation = "";
      }
    } while (swapped);
  }
  
  // Display the elements in the sorting-container
  const elementsToSort = [234, 43, 55, 63, 5, 6, 235, 547];
  const sortingContainer = document.querySelector(".sorting-container");
  
  for (const element of elementsToSort) {
    const el = document.createElement("div");
    el.className = "element";
    el.textContent = element;
    sortingContainer.appendChild(el);
  }
  
  function startSorting() {
    bubbleSort(elementsToSort).then(() => console.log("Sorted Array:", elementsToSort));
  }
  