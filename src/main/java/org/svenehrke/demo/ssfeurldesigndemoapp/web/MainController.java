package org.svenehrke.demo.ssfeurldesigndemoapp.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class MainController {

	// Redirect root "/" to "/ui/app"
	@GetMapping("/")
	public String redirectRoot() {
		return "redirect:/ui/app";
	}

	@GetMapping("/ui/app")
	public String app(
		@RequestParam(value = "customers.show", required = false) Long customerShow,
		@RequestParam(value = "customers.edit", required = false) Long customerEdit,
		@RequestParam(value = "customers.new", required = false) Boolean customerNew,

		@RequestParam(value = "orders.show", required = false) Long orderShow,
		@RequestParam(value = "orders.edit", required = false) Long orderEdit,
		@RequestParam(value = "orders.new", required = false) Boolean orderNew,

		@RequestParam(value = "items.show", required = false) Long itemShow,
		@RequestParam(value = "items.edit", required = false) Long itemEdit,
		@RequestParam(value = "items.new", required = false) Boolean itemNew,
		Model model) {

		// expose states to the view
		if (customerShow != null) {
			model.addAttribute("customerShow", customerShow);
		}
		model.addAttribute("customerEdit", customerEdit);
		model.addAttribute("customerNew", customerNew);

		model.addAttribute("orderShow", orderShow);
		model.addAttribute("orderEdit", orderEdit);
		model.addAttribute("orderNew", orderNew);

		model.addAttribute("itemShow", itemShow);
		model.addAttribute("itemEdit", itemEdit);
		model.addAttribute("itemNew", itemNew);

		model.addAttribute("customerList", List.of());

		return "app"; // renders app.html
	}

	@GetMapping("/ui/fragcustomers/edit")
	public String editCustomerFragment(@RequestParam("id") Long customerId, Model model) {
		model.addAttribute("id", customerId);
		return "fragments/customers/customers-edit :: panel";
//		return "fragments/customers/customers-edit";
	}
}
