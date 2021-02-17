package com.calculadorahorastrabajadas.app.enums;

public enum Estados {
	
	NUEVO(0), PROCESANDO(1), FINALIZADO(2);

	private int code;

	Estados(int code) {
		this.code = code;
	}

	public int getCode() {
		return code;
	}

}
