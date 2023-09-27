

        multiplierElements[i].innerText = "Multiplier " + (i + 1) + ": " + predictedMultipliers[i];
        // Reset the background color
        multiplierElements[i].classList.remove('green-highlight');
    }

    // Highlight the lowest and highest multipliers
    multiplierElements[minIndex].classList.add('green-highlight');
    multiplierElements[maxIndex].classList.add('green-highlight');
}
