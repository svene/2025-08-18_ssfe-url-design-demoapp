package org.svenehrke.demo.ssfeurldesigndemoapp.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class FragmentController {

	@GetMapping("/ui/fragments/empty")
	public String empty() {
		return "fragments/empty";
	}
	@GetMapping("/ui/fragments/customers/edit")
	public String editCustomerFragment(@RequestParam("id") Long id, Model model) {
		model.addAttribute("id", id);
		return "fragments/customers/customers-edit :: panel";
	}
	@GetMapping("/ui/fragments/customers/show")
	public String showCustomer(@RequestParam("id") Long id, Model model) {
		model.addAttribute("id", id);
		return "fragments/customers/customers-show :: panel";
	}
}
